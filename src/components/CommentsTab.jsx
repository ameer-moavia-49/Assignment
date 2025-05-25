import React, { useState } from 'react';

const CommentsTab = () => {
  const initialComments = [
    {
      id: 1,
      author: 'John Doe',
      text: 'This task needs more clarification on the requirements.',
      timestamp: '2 hours ago',
      replies: [
        {
          id: 11,
          author: 'Jane Smith',
          text: 'I agree, let me add more details to the description.',
          timestamp: '1 hour ago'
        }
      ]
    },
    {
      id: 2,
      author: 'Mike Johnson',
      text: 'I think we should prioritize this task for the next sprint.',
      timestamp: '30 minutes ago',
      replies: []
    }
  ];

  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState('');

  const getInitials = (name) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        author: 'Current User',
        text: newComment,
        timestamp: 'Just now',
        replies: []
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  const handleAddReply = (commentId) => {
    if (replyText.trim()) {
      setComments(comments.map(comment => {
        if (comment.id === commentId) {
          const reply = {
            id: Date.now(),
            author: 'Current User',
            text: replyText,
            timestamp: 'Just now'
          };
          return {
            ...comment,
            replies: [...comment.replies, reply]
          };
        }
        return comment;
      }));
      setReplyText('');
      setReplyingTo(null);
    }
  };

  return (
    <div className="comments-content p-4 space-y-6">
      <h3 className="text-lg font-semibold">Comments ({comments.length})</h3>

      <div className="space-y-4">
        {comments.map(comment => (
          <div key={comment.id} className="border-b pb-4 last:border-b-0">
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
                  {getInitials(comment.author)}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{comment.author}</span>
                  <span className="text-xs text-gray-500">{comment.timestamp}</span>
                </div>
                <p className="mt-1 text-sm">{comment.text}</p>
                <button 
                  onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                  className="mt-2 text-xs text-blue-500 hover:text-blue-700"
                >
                  Reply
                </button>

                {replyingTo === comment.id && (
                  <div className="mt-3 flex gap-2">
                    <input
                      type="text"
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder="Write a reply..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <button
                      onClick={() => handleAddReply(comment.id)}
                      className="px-3 py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600"
                    >
                      Send
                    </button>
                  </div>
                )}
              </div>
            </div>

            {comment.replies.length > 0 && (
              <div className="mt-3 ml-11 space-y-3 pl-4 border-l-2 border-gray-200">
                {comment.replies.map(reply => (
                  <div key={reply.id} className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium">
                        {getInitials(reply.author)}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{reply.author}</span>
                        <span className="text-xs text-gray-500">{reply.timestamp}</span>
                      </div>
                      <p className="mt-1 text-xs">{reply.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6">
        <div className="flex gap-3">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
              {getInitials('Current User')}
            </div>
          </div>
          <div className="flex-1">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
            />
            <div className="mt-2 flex justify-end">
              <button
                onClick={handleAddComment}
                className="px-4 py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600"
              >
                Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsTab;