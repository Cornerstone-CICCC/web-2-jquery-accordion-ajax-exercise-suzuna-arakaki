$(function () {
  $('.accordion .accordion-header').on('click', function () {
    $(this).next('.accordion-content').slideToggle()
  })

  function buildTodos(todos) {
    let list = ""
    for (let i = 0; i < todos.length; i++) {
      list += "<li>" + todos[i].todo + "</li>"
    }
    $('.todos ul').html(list)
  }

  $('.todos button').on('click', function () {
    $.ajax({
      url: "https://dummyjson.com/todos",
      type: "GET",
      success: function (data) {
        buildTodos(data.todos)
      },
      error: function (err) {
        console.error(err)
      }
    })
  })
})