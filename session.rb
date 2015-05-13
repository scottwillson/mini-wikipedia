CelluloidBenchmark::Session.define do
  benchmark :article_show, 0.5
  get "http://localhost:3000/api/v1/articles/1"
end
