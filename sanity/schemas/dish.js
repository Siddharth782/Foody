import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    // Name
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name of Dish',
      validation: (Rule) => Rule.required(),
    }),
    // Description
    defineField({
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: (Rule) => Rule.max(200),
    }),
    // Image
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of Dish',
      options: {
        hotspot: true,
      },
    }),
    // Price
    defineField({
      name: 'price',
      type: 'number',
      title: 'Price of the dish in Dollars',
    }),
  ],

})
