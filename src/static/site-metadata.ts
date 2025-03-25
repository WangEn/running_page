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
  logo: 'https://source.imwarn.com/blog/assets/brand_logo.k_gvkHeA_Z2rxCYz.png',
  description: 'Personal site and blog',
  navLinks: [
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
