function updateTime(timeObject) {
            var today = new Date();
            var date = today.getDate().toString().length == 1 ? "0" + today.getDate() : today.getDate();
            var months = (today.getMonth() + 1).toString().length == 1 ? "0" + (today.getMonth() + 1) : (today.getMonth() + 1);
            var date = date + '.' + months + '.' + today.getFullYear();

            var hours = today.getHours().toString().length == 1 ? "0" + today.getHours() : today.getHours();
            var minutes = today.getMinutes().toString().length == 1 ? "0" + today.getMinutes() : today.getMinutes();
            var seconds = today.getSeconds().toString().length == 1 ? "0" + today.getSeconds() : today.getSeconds();
            var time = today.getHours() + ":" + minutes + ":" + seconds;

            var dateTime = date + " " + time;
    
            timeObject.textContent = dateTime;
        }
            
        timeElem = document.getElementById("time");
        updateTime(timeElem);
        setInterval(function() {
            updateTime(timeElem);
        }, 1000);
