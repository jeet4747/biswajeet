# Deployment Guide

This document outlines several options for deploying your portfolio website to make it accessible online.

## Option 1: GitHub Pages (Free)

1. Create a GitHub repository
2. Push your portfolio code to the repository
3. Go to repository Settings > Pages
4. Select the main branch as the source
5. Your site will be published at `https://<username>.github.io/<repository-name>`

## Option 2: Netlify (Free Tier)

1. Create an account on [Netlify](https://www.netlify.com/)
2. Click "New site from Git"
3. Connect your GitHub/GitLab/Bitbucket account
4. Select your portfolio repository
5. Configure build settings (not needed for this static site)
6. Click "Deploy site"
7. Your site will be published with a Netlify subdomain, which you can customize

## Option 3: Vercel (Free Tier)

1. Create an account on [Vercel](https://vercel.com/)
2. Click "New Project"
3. Import your repository from GitHub/GitLab/Bitbucket
4. Configure project settings (not needed for this static site)
5. Click "Deploy"
6. Your site will be published with a Vercel subdomain, which you can customize

## Option 4: Custom Domain Setup

To use your own domain name (e.g., www.biswajeetmishra.com):

1. Purchase a domain from a domain registrar like Namecheap, GoDaddy, Google Domains, etc.
2. Follow the custom domain setup instructions for your chosen hosting platform:
   - [GitHub Pages Custom Domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
   - [Netlify Custom Domain](https://docs.netlify.com/domains-https/custom-domains/)
   - [Vercel Custom Domain](https://vercel.com/docs/projects/domains/add-a-domain)

3. Configure DNS records as instructed by your hosting platform
4. Wait for DNS propagation (can take up to 48 hours)
5. Enable HTTPS for your domain

## Testing Before Deployment

Before deploying, make sure to:

1. Test your website in multiple browsers (Chrome, Firefox, Safari, Edge)
2. Test on different devices (desktop, tablet, mobile)
3. Check for any broken links or images
4. Ensure the contact form works correctly
5. Verify that all animations and interactive elements function as expected 