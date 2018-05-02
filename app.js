$(document).ready(function () {
    $.ajax({
        url: "http://faker.hook.io/?property=name.firstName",
        method: 'GET',
        dataType: "JSON"
    }).done( function(firstName) {
        debugger
        setName(firstName)
    })

    function setName(name) {
        $('#name').html(name)
    }
});

$(document).ready(function () {
    $.ajax({
        url: "http://faker.hook.io/?property=image.avatar",
        method: 'GET',
        dataType: "JSON"
    }).done( function(profilePic) {
        setImage(profilePic)
    })

    function setImage(img) {
        $('#profile-pic').attr("src", img)
    }
});

$(document).ready(function () {
    $.ajax({
        url: "http://faker.hook.io/?property=date.recent",
        method: 'GET',
        dataType: "JSON"
    }).done( function(date) {
        setDate(date)
    })

    function setDate(date) { 
        var day = moment(date).date()
        var month = moment(date).format('MMMM')
        var year = moment(date).year()
        $('#date').html(month + " " + day + ", " + year)
    }
});

$(document).ready(function () {
    $.ajax({
        url: "http://faker.hook.io/?property=lorem.sentence",
        method: 'GET',
        dataType: "JSON"
    }).done( function(title) {
        setTitle(title)
    })

    function setTitle(title) { 
        $('#title').html(title)
    }
});

$(document).ready(function () {
    $.ajax({
        url: "http://faker.hook.io/?property=lorem.paragraphs",
        method: 'GET',
        dataType: "JSON"
    }).done( function(post) {
        setPost(post)
    })

    function setPost(post) { 
        $('#post-body').html(post)
    }
});