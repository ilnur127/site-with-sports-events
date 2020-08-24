let mobile_bar = document.getElementById('mobile-bar-menu');
mobile_bar.addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('active');
    document.querySelector('#mobile-bar-menu').classList.toggle('active');
})

let info = [{ date: '30 мая', time: '15:00', place: 'Казань Арена', team1: 'Акбарс', team2: 'Зенит' },
        { date: '17 июня', time: '16:00', place: 'Акбарс Арена', team1: 'Динамо', team2: 'Спартак' },
        { date: '26 июня', time: '19:00', place: 'Зенит Арена', team1: 'Реал', team2: 'Манчестер' },
        { date: '16 июля', time: '20:00', place: 'Лужники', team1: 'Бавария', team2: 'Барса' },
        { date: '30 сентября', time: '22:00', place: 'Динамо Арена', team1: 'ПСЖ', team2: 'Юнайтет' }
    ],
    view_info = document.querySelector(".main").children,
    name_team1 = document.getElementById("main-name-team1"),
    name_team2 = document.getElementById("main-name-team2");
view_info = Array.prototype.slice.call(view_info);
view_info.forEach(function(el, i) {
    let el_children = el.children,
        ind = i - 2,
        date_number,
        date_month
    el_children = Array.prototype.slice.call(el_children);
    if (i > 1 && i != 4) {
        for (let i = 0; i < info.length; i++) {
            if (i == ind) {
                date_number = info[i]['date'].split(' ')[0];
                date_month = info[i]['date'].split(' ')[1];
            }
        }
        el_children.forEach(function(el, i) {
            if (i == 0) el.textContent = date_number;
            if (i == 1) el.textContent = date_month;
        })
    }
    if (i == 4) {
        el_children.forEach(function(el, i) {
            if (i == 0) el.textContent = info[2]['place'];
            if (i == 1) el.textContent = info[2]['date'];
            if (i == 2) el.textContent = info[2]['time'];
        })
        name_team1.textContent = info[2]['team1'];
        name_team2.textContent = info[2]['team2'];
    }
});

document.addEventListener('wheel', function(e) {
    if (e.deltaY > 0) {
        console.log('down');
        let date_out_active = document.querySelector(".main-active-hexagon-info-date").textContent.split(' '),
            date_in_active = document.querySelector(".main-near-hexagon-2").children[0].textContent + ' ' + document.querySelector(".main-near-hexagon-2").children[1].textContent,
            date_last = document.querySelector(".main-far-hexagon-2").children[0].textContent + ' ' + document.querySelector(".main-far-hexagon-2").children[1].textContent;
        if (document.getElementsByClassName("main-far-hexagon-2")[0].style.display == 'none' && document.getElementsByClassName("main-near-hexagon-2")[0].style.display == 'none') {
            return false;
        }
        if (document.getElementsByClassName("main-far-hexagon-2")[0].style.display == 'none' && document.getElementsByClassName("main-near-hexagon-2")[0].style.display == '') {
            document.getElementsByClassName("main-near-hexagon-2")[0].style.display = 'none';
        }
        for (let i = 0; i < info.length; i++) {
            if (date_last == info[i]['date']) {
                if (info[i + 1] == undefined) {
                    document.getElementsByClassName("main-far-hexagon-2")[0].style.display = 'none';
                }
            }
        }
        document.querySelector(".main-far-hexagon-1").children[0].textContent = document.querySelector(".main-near-hexagon-1").children[0].textContent;
        document.querySelector(".main-far-hexagon-1").children[1].textContent = document.querySelector(".main-near-hexagon-1").children[1].textContent;
        document.querySelector(".main-near-hexagon-1").children[0].textContent = date_out_active[0];
        document.querySelector(".main-near-hexagon-1").children[1].textContent = date_out_active[1];
        for (let i = 0; i < info.length; i++) {
            if (date_in_active == info[i]['date']) {
                document.querySelector(".main-active-hexagon").children[0].textContent = info[i]['place'];
                document.querySelector(".main-active-hexagon-info-date").textContent = info[i]['date'];
                document.querySelector(".main-active-hexagon").children[0].textContent = info[i]['time'];
                document.getElementById("main-name-team1").textContent = info[i]['team1'];
                document.getElementById("main-name-team2").textContent = info[i]['team2'];
            }
        }
        document.querySelector(".main-near-hexagon-2").children[0].textContent = document.querySelector(".main-far-hexagon-2").children[0].textContent;
        document.querySelector(".main-near-hexagon-2").children[1].textContent = document.querySelector(".main-far-hexagon-2").children[1].textContent;

    }
    if (e.deltaY < 0) {
        console.log('up');
        let date_out_active = document.querySelector(".main-active-hexagon-info-date").textContent.split(' '),
            date_in_active = document.querySelector(".main-near-hexagon-1").children[0].textContent + ' ' + document.querySelector(".main-near-hexagon-1").children[1].textContent,
            date_first = document.querySelector(".main-far-hexagon-1").children[0].textContent + ' ' + document.querySelector(".main-far-hexagon-1").children[1].textContent;
        if (document.getElementsByClassName("main-far-hexagon-1")[0].style.display == 'none' && document.getElementsByClassName("main-near-hexagon-1")[0].style.display == 'none') {
            return false;
        }
        if (document.getElementsByClassName("main-far-hexagon-1")[0].style.display == 'none' && document.getElementsByClassName("main-near-hexagon-1")[0].style.display == '') {
            document.getElementsByClassName("main-near-hexagon-1")[0].style.display = 'none';
        }
        for (let i = 0; i < info.length; i++) {
            if (date_first == info[i]['date']) {
                if (i == 0) {
                    document.getElementsByClassName("main-far-hexagon-1")[0].style.display = 'none';
                }
            }
        }
        document.querySelector(".main-far-hexagon-2").children[0].textContent = document.querySelector(".main-near-hexagon-2").children[0].textContent;
        document.querySelector(".main-far-hexagon-2").children[1].textContent = document.querySelector(".main-near-hexagon-2").children[1].textContent;
        document.querySelector(".main-near-hexagon-2").children[0].textContent = date_out_active[0];
        document.querySelector(".main-near-hexagon-2").children[1].textContent = date_out_active[1];
        for (let i = 0; i < info.length; i++) {
            if (date_in_active == info[i]['date']) {
                document.querySelector(".main-active-hexagon").children[0].textContent = info[i]['place'];
                document.querySelector(".main-active-hexagon-info-date").textContent = info[i]['date'];
                document.querySelector(".main-active-hexagon").children[0].textContent = info[i]['time'];
                document.getElementById("main-name-team1").textContent = info[i]['team1'];
                document.getElementById("main-name-team2").textContent = info[i]['team2'];
            }
        }
        document.querySelector(".main-near-hexagon-1").children[0].textContent = document.querySelector(".main-far-hexagon-1").children[0].textContent;
        document.querySelector(".main-near-hexagon-1").children[1].textContent = document.querySelector(".main-far-hexagon-1").children[1].textContent;
    }
})