interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://run.imwarn.com',
  logo: 'https://source.imwarn.com/2025/03/7edef04276e7647a5555f93267fd070f.png',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Summary',
      url: '/summary',
    },
    {
      name: 'Blog',
      url: 'https://blog.imwarn.com',
    },
    {
      name: 'About',
      url: 'https://blog.imwarn.com/posts/about/',
    },
  ],
};

export default data;
