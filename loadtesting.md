## Config Details


var id = Math.floor(Math.random() * 10000000);

export let options = {
  vus: 1000,
  duration: '300s',
};

export default function() {
  http.get(`http://localhost:3000/?id=${id}`);
  sleep(1);
}



## Sample Results:


    data_received..............: 710 MB 2.4 MB/s
    data_sent..................: 27 MB  88 kB/s
    http_req_blocked...........: avg=1.46ms   min=0s med=4µs    max=2.23s    p(90)=7µs     p(95)=10µs
    http_req_connecting........: avg=1.45ms   min=0s med=0s     max=2.23s    p(90)=0s      p(95)=0s
    http_req_duration..........: avg=22.01ms  min=0s med=5.79ms max=1.83s    p(90)=24.72ms p(95)=54.31ms
    http_req_receiving.........: avg=154.73µs min=0s med=43µs   max=388.49ms p(90)=83µs    p(95)=107µs
    http_req_sending...........: avg=32.37µs  min=0s med=18µs   max=146.43ms p(90)=31µs    p(95)=41µs
    http_req_tls_handshaking...: avg=0s       min=0s med=0s     max=0s       p(90)=0s      p(95)=0s
    http_req_waiting...........: avg=21.83ms  min=0s med=5.69ms max=1.71s    p(90)=24.54ms p(95)=54.03ms
    http_reqs..................: 292333 971.077401/s
    iteration_duration.........: avg=1.02s    min=1s med=1s     max=3.47s    p(90)=1.02s   p(95)=1.05s
    iterations.................: 292333 971.077401/s
    vus........................: 32     min=32   max=1000
    vus_max....................: 1000   min=1000 max=1000