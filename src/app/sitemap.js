// app/sitemap.js
export default async function sitemap() {
  return [
    {
      url: "https://www.smartchoicerentalmanagement.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: "https://www.smartchoicerentalmanagement.com/about",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.smartchoicerentalmanagement.com/contact-us",    
      lastModified: new Date(),
      changeFrequency: "weekly",                 
      priority: 0.8,
    },


  ];
}