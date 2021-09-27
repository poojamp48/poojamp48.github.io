const watch = document.querySelector("#stopwatch");
      let millisecound = 0;
      let timer;

      function timeStart(){
        watch.style.color = "#11def5"; /*--#16026e*/
        clearInterval(timer);
        timer = setInterval(() => {
          millisecound += 10;

          let dateTimer = new Date(millisecound);

          watch.innerHTML = 
          ('0'+dateTimer.getUTCHours()).slice(-2) + ':' +
          ('0'+dateTimer.getUTCMinutes()).slice(-2) + ':' +
          ('0'+dateTimer.getUTCSeconds()).slice(-2) + ':' +
          ('0'+dateTimer.getUTCMilliseconds()).slice(-3,-1);
        }, 10);
      }


      function timePaused() {
        watch.style.color = "red";
        clearInterval(timer);
      }

      function timeReset(){
        setInterval(timer)
        millisecound = 0;
        watch.innerHTML = "00:00:00:00";
      }

      document.addEventListener('click', (e) => {
        const el = e.target;

        if(el.id === 'start') timeStart();
        if(el.id === 'pause') timePaused();
        if(el.id === 'reset') timeReset();
      })