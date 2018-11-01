import $ from 'jquery';

function render_html_post(post_item) {
  let tag_rendered = post_item.tags.map((tag) => {
    return `<a href="#${tag}">#${tag}</a>`
  }).join(', ')
  return (
    `
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <article class="tile is-child box">
                <p class="title"><a href="${ post_item.url }">${ post_item.title }</a></p>
                <p class="is-size-7">Written by <strong>${ post_item.author }</strong> on ${ post_item.date } in 
                ${tag_rendered}</p>
                <div class="is-divider" style="margin:20px 0px"></div>
                <p>${ post_item.excerpt }</p>
                <p class="has-text-right"><a class="button is-link is-inverted is-focused" href="${ post_item.url }">Read More</a></p>
                </article>
            </div>
        </div>
    `
  )
}

function add_post(post_item) {
  $("#posts").append(render_html_post(post_item))
}
posts.map((post) => {
  add_post(post);
})