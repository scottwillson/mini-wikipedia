
Setup
-----
Install node.js 0.12.2
    npm install

Install Ruby 2+ (for concurrency tests)

    gem install bundler
    bundle


Run
---
    node app.js

Tests
---------
    curl http://localhost:3000/api/v1/articles/1
    celluloid-benchmark -d 20 -v 4

Celluloid-benchmark is a concurrent, stateful, scriptable load test tool. -d is duration in second -v is number of concurrent visitors. Test is in session.rb.