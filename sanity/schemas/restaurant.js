import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [

    defineField({
      name: "name",
      type: "string",
      title: "Restaurant Name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "short_description",
      type: "string",
      title: "Short Description",
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image of Restaurant",
    }),
    defineField({
      name: "lat",
      type: "number",
      title: "Latitude of Restaurant",
    }),
    defineField({
      name: "long",
      type: "number",
      title: "Longitude of Restaurant",
    }),
    defineField({
      name: "address",
      type: "string",
      title: "Restaurant Address",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rating",
      type: "number",
      title: "Enter a Rating from (1-5 Stars)",
      validation: (Rule) => Rule.required().min(1).max(5).error("Please enter a Value between 1 and 5"),
    }),
    // Usually to reference to another type.... for dropdowns
    defineField({
      name: "type",
      type: "reference",
      title: "Category",
      validation: (Rule) => Rule.required(),
      to: [{ type: "category" }]
    }),
    defineField({
      name: "dishes",
      type: "array",
      title: "Dishes",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    }),
  ],
  // fields: [
  //   defineField({
  //     name: 'title',
  //     title: 'Title',
  //     type: 'string',
  //   }),
  //   defineField({
  //     name: 'slug',
  //     title: 'Slug',
  //     type: 'slug',
  //     options: {
  //       source: 'title',
  //       maxLength: 96,
  //     },
  //   }),
  //   defineField({
  //     name: 'author',
  //     title: 'Author',
  //     type: 'reference',
  //     to: { type: 'author' },
  //   }),
  //   defineField({
  //     name: 'mainImage',
  //     title: 'Main image',
  //     type: 'image',
  //     options: {
  //       hotspot: true,
  //     },
  //   }),
  //   defineField({
  //     name: 'categories',
  //     title: 'Categories',
  //     type: 'array',
  //     of: [{ type: 'reference', to: { type: 'category' } }],
  //   }),
  //   defineField({
  //     name: 'publishedAt',
  //     title: 'Published at',
  //     type: 'datetime',
  //   }),
  //   defineField({
  //     name: 'body',
  //     title: 'Body',
  //     type: 'blockContent',
  //   }),
  // ],

  // preview: {
  //   select: {
  //     title: 'title',
  //     author: 'author.name',
  //     media: 'mainImage',
  //   },
  //   prepare(selection) {
  //     const { author } = selection
  //     return { ...selection, subtitle: author && `by ${author}` }
  //   },
  // },
})
