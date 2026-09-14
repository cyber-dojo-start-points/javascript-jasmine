
lambda { |stdout,stderr,status|
  output = stdout + stderr
  # A spec marked with fit, or a block with fdescribe, runs alone and skips
  # its siblings, so the suite says nothing about the specs it never ran.
  # Jasmine announces that on a line of its own.
  return :amber if /^Incomplete: /.match(output)

  counts = /^(\d+) specs?, (\d+) failures?(?:, (\d+) pending specs?)?/.match(output)
  return :amber if counts.nil?

  return :red if counts[2].to_i > 0

  # A pending spec is counted but not run, so subtracting them leaves the
  # specs that actually proved something. A suite where every spec is marked
  # with xit reaches this with nothing left, and nothing to be green about.
  return :amber if counts[1].to_i - counts[3].to_i == 0

  return :green
}
