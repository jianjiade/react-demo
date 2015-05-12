/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-05-12 14:02:38
 * @version $Id$
 */



// var CommentBox = React.createClass({
// 	displayName: 'CommentBox',
// 	render: function () {
// 		return (
// 			React.createElement('div', {className: 'commentBox'},
// 				"Hello, world! I am a commentBox."
// 				)
// 			)
// 	}
// });

// React.render(
// 	React.createElement(CommentBox, null),
// 	document.getElementById('content')
// )
var converter = new Showdown.converter();
var Comment = React.createClass({
	render: function () {
		var rawMarkup = converter.makeHtml(this.props.children.toString());
		return (
			<div className="comment">
			<h2 className="commentAuthor">
			{this.props.author}
			</h2>
			<span dangerouslySetInnerHTML={{__html: rawMarkup}} />
			</div>
			)
	}
});

var CommentList = React.createClass({
	render: function () {
		var commentNodes = this.props.data.map(function(comment) {
			return (
				<Comment author={comment.author}>{comment.text}</Comment>
				)
		});

		return (
			<div className='commentList'>
			{commentNodes}
			</div>
			)
	}
});

var CommentForm = React.createClass({
	render: function () {
		return (
			<div> Hello I am commentForm.</div>
		)
	}
});

var CommentBox = React.createClass({
	render: function () {
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.props.data}/>
				<CommentForm />
			</div>
		)
	}
});

React.render(
	<CommentBox url="/comments.json" />,
	document.getElementById('content')
);