export default {
  name: 'tweet',
  title: 'Tweet',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'blockTweet',
      title: 'Block Tweet',
      type: 'boolean',
      description: 'Toggle',
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string',
      
    },
    {
      name: 'profileImg',
      title: 'Main image',
      type: 'string',
      
    },
    {
      name: 'image',
      title: 'Tweet Image',
      type: 'string',
    },

  ],
}
