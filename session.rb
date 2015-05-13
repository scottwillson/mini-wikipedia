CelluloidBenchmark::Session.define do
  20.times do
    if rand < 0.01
      benchmark :article_show, 0.5
      page = get("http://localhost:3000/api/v1/articles/1")
      version = page["article-version"]

      benchmark :article_update, 0.5
      post "http://localhost:3000/api/v1/articles/1", { version: version, html: "<html/>"}
    else
      benchmark :article_show, 0.5
      get "http://localhost:3000/api/v1/articles/1"
    end
  end
end
