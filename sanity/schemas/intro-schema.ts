const intro = {
  name: 'intro',
  title: 'Intro',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'icons',
      title: 'Icons',
      type: 'array',
      of: [
        {
          name: 'icon',
          title: 'Icon',
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Alt',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}

export default intro
