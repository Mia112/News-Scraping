// $(document).ready(function () {
//             var articleContainer = $(".article-container");
//             $(document).on("click", ".btn.delete", handleArticleDelete);
//             $(document).on("click", ".btn.notes", handleArticleNotes);
//             $(document).on("click", ".btn.note-delete", handleArticleDelete);

//             initPage();

//             function initPage() {
//                 articleContainer.empty();
//                 $.get("/api/headlines?save=true").then(function (data) {
//                     if (data && data.length) {
//                         renderArticles(data);

//                     } else {
//                         renderEmpty();
//                     }
//                 });
//             }

//             function renderArticles(articles) {
//                 var articlePanels = [];

//                 for (var i = 0; i < articles.length; i++) {
//                     articlePanels.push(createPanel(articles[i]));
//                 }
//                 articleContainer.append(articlePanels);

//             }

//             function createPanel(article) {
//                 var panel = $(["<div class='panel panel-default'>",
//                     "<div class='panel-heading'>",
//                     "<h3>",
//                     article.headline,
//                     "<a class='btn btn-danger delete'>",
//                     "Delete From Saved",
//                     "</a>",
//                     "</h3>",
//                     "</div>",
//                     "<div class='panel-body'>",
//                     article.summary,
//                     "</div>",
//                     "<div>"
//                 ].join(""));

//                 panel.data("_id", article._id);
//                 return panel;
//             }

//             function renderEmpty() {
//                 var emptyAlert =
//                     $(["<h4> No New articles</h4>"].join(""));

//                 articleContainer.append(emptyAlert);
//             }

//             function randerNotesList(data) {
//                 var notesToRander = [];
//                 var currentNote;
//                 if (!data.notes.length) {
//                     currentNote = [

//                     ]
//                 }
//             }
// function handleArticleNotes() {
//     var currentArticle = $(this).parents(".panel").data();
//     $.get("/api/notes/" + currentArticle._id).then(function(data) {
//         var modalText = [
//             "<div class='container-fluid test-center'>",
//             "<h4>Notes For Article: ",
//             currentArticle._id,
//             "</h4>",
//             "<hr />",
//             "<a class='btn btn-success save'>",
//             "save Article",
//             "</a>",
//             "</h3>",
//             "</div>",
//             "<div class='panel-body'>",
//             article.summary,
//             "</div>",
//             "<div>"
//         ].join(""));
        
//         panel.data("_id", article._id);
//         return panel;
//         }
//         ]
//     })
// }