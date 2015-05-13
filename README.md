
Setup
-----
Install node.js 0.12.2
    npm install

Install Ruby 2+ (for concurrency tests)

    gem install bundler
    bundle


Run
---
    grunt
    node cluster.js

Grunt clears public dir and resets lock counter in Redis.

Tests
---------
    curl http://localhost:3000/api/v1/articles/1
    curl -X POST -d "html=new-html" -d "version=0" http://localhost:3000/api/v1/articles/1
    celluloid-benchmark -d 20 -v 4

Celluloid-benchmark is a concurrent, stateful, scriptable load test tool. -d is duration in second -v is number of concurrent visitors. Test is in session.rb.

It *should* show ERR for the update under moderate concurrency. Some editors are going to try stale updates, and they'll get 409s returned.