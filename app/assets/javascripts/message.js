$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="MessageBox">
          <div class="message-day">
            <div class="message-day__name">
              ${message.user_name}
            </div>
            <div class="message-day__day">
              ${message.created_at}
            </div>
          </div>
          <div class="text">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="MessageBox">
        <div class="message-day">
          <div class="message-day__name">
            ${message.user_name}
          </div>
          <div class="message-day__day">
            ${message.created_at}
          </div>
        </div>
        <div class="text">
          <p class="Message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.form').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.chat-main__message-list').append(html);
      $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
      $('form')[0].reset();
      // console.log(data)
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
  });
  });
});