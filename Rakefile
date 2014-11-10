# -*- coding: utf-8 -*-
require 'net/http'
require 'csv'
require 'uri'
require 'json'
require 'pp'
require 'time'
require 'jekyll'
require 'fileutils'

namespace :polls do
  task :fetch do
    resp = Net::HTTP.get_response(URI("https://docs.google.com/spreadsheets/d/1nnOYq5Z_3aevKJAQMu4T8qijGkLYYLur4gwvSsu6N6w/export?format=csv"))
    data = CSV.parse(resp.body.force_encoding("UTF-8"), headers: true).map(&:to_h)

    by_issue = data.group_by { |e| e['SAK'] }
    result = by_issue.map do |issue, rows|
      polls = rows.map do |row|
        positions = 1.upto(10).map do |idx|
          name  = row["POS#{idx}"]
          value = row["POS#{idx}-VALUE"]

          if name && value
            {name: name, value: value.to_f}
          end
        end.compact

        {
          agency: row['BYRÅ'],
          published_at: Time.parse(row['PUBLISERT']).strftime("%Y-%m-%d"),
          client: row['BESTILT AV'],
          question: row['SPØRSMÅL'],
          positions: positions,
          n: row['N'].to_i,
          collection_start: row['START INNSAMLINGSPERIODE'] && Time.parse(row['START INNSAMLINGSPERIODE']),
          collection_end: row['SLUTT INNSAMLINGSPERIODE'] && Time.parse(row['SLUTT INNSAMLINGSPERIODE']),
          source_url: row['KILDEURL'],
          source_name: row['KILDENAVN'],
          error_margin: row['FEILMARGIN %']
        }
      end

      slug = Jekyll::Utils.slugify(issue)

      {
        title: issue,
        slug: slug,
        url: "/polls/#{slug}",
        date: polls.map { |e| e[:published_at] }.sort.last,
        polls: polls
      }
    end

    Dir['./_polls/*'].each do |poll|
      FileUtils.rm poll unless poll =~ /\ball\.html/
    end

    result = result.sort_by { |e| e[:date] }.reverse
    result.each do |issue|
      issue = JSON.parse(issue.to_json) # stringify keys
      issue['layout'] = 'poll'

      File.open("./_polls/#{issue['slug']}.html", 'w') do |io|
        io.puts YAML.dump(issue)
        io.puts "---"
      end
    end
  end
end
