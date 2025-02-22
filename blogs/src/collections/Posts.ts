import { get } from 'http'
import path from 'path'
import type { CollectionConfig } from 'payload'
export const Posts: CollectionConfig = {
  slug: 'posts',
  access: {
    read: ({ req: { user } }) => {
      if (user) {
        return true
      }
      return false
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'authors',
      required: true,
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'publishDate',
      type: 'date',
      required: true,
    },
  ],
  endpoints: [
    {
      path: '/viewposts',
      method: 'get',
      handler: async (req) => {
        console.log('simplifiedData')
        const response = await fetch(`http://localhost:3000/api/posts`, {
          method: 'GET',
          credentials: 'include',
        })

        if (response.ok) {
          const data = await response.json()
          console.log(data)
          const simplifiedData = data.docs.map((post: any) => ({
            id: post.id,
            title: post.title,
            content: post.content.root.children[0].children[0].text,
            authorName: post.author.name,
            authorImage: post.author.profilePicture.url,
            coverImage: post.coverImage.url,
            publishDate: post.publishDate,
            authorBio: post.author.bio.root.children[0].children[0].text,
          }))

          return new Response(JSON.stringify(simplifiedData, null, 2), { status: 200 })
        } else {
          return new Response(JSON.stringify({ message: 'Error fetching posts' }), { status: 500 })
        }
      },
    },
  ],
}
