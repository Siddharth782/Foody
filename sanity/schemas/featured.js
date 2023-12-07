import { defineType, defineField } from 'sanity'


export default defineType({
  title: 'Featured Menu Categories',
  name: 'featured',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Featured name category',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'restaurants',
      type: 'array',
      title: 'Restaurants',
      of: [{ type: "reference", to: [{ type: "restaurant" }] }]
    }),
  ]
})
