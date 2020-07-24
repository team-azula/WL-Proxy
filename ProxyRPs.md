# RPS Report - Proxy (Local)

### Load Testing Config

> #### Testing criteria:
>  - 100 users per seconds - sustained for 3 minutes
>  - Each user viewing 1 combined service page per second

### New Relic Meter Results

![](https://gist.github.com/zjayers/8412791570a119bd11b6c883f58af125/raw/637edac2571e6bf127ca1ed1bdaab5ecb22ebf39/Screen%2520Shot%25202020-07-23%2520at%25205.41.48%2520PM.png)

#### Loader-io Thread Group Configuration
- Thread group is set to run 100 users per second
- Thread sustains user interaction for 1 minute

![](https://gist.github.com/zjayers/8412791570a119bd11b6c883f58af125/raw/637edac2571e6bf127ca1ed1bdaab5ecb22ebf39/Screen%2520Shot%25202020-07-23%2520at%25205.40.46%2520PM.png)

#### Loader-io Results
- 6,000 requests made over 1 minute
- Error Threshold - 0.00%
- Throughput - 100 request/sec

![](https://gist.github.com/zjayers/8412791570a119bd11b6c883f58af125/raw/637edac2571e6bf127ca1ed1bdaab5ecb22ebf39/Screen%2520Shot%25202020-07-23%2520at%25205.17.43%2520PM.png)
