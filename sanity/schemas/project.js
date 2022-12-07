export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },

    {
      name: 'date',
      title: 'Date project creation',
      type: 'date',
      options: {
        dateFormat: 'YYYY MMMM',
      },
    },
    {
      name: 'backgroundimage',
      title: 'Background image',
      type: 'image',
      fields: [
        {
          name: 'alttext',
          title: 'Alt text',
          type: 'string',
        },
      ],
    },

    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },

    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'tag' },
        },
      ],
    },
    {
      name: 'gitUrl',
      type: 'url',
      title: 'Github URL',
    },

    {
      name: 'deployUrl',
      type: 'url',
      title: 'Deployment url',
    },
  ],
};
