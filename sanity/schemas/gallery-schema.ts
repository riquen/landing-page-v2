const gallery = {
  name: 'gallery',
  title: 'Gallery',
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
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
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
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'price',
              title: 'Price',
              type: 'number',
            },
          ],
        },
      ],
    },
  ],
}

export default gallery
