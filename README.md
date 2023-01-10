# Panther CV

## About Panther CV

This project aims to create an open source CV template allowing users to easily upload their data into a nice and customizable website.

Right now, everything will be static since my first goal is to have a website that I can share in my Linkedin profile.

As this project grows, I will integrate the following features:

- API integration, allowing users to hold their data in a custom Database.
- Administration panel allowing users to create, read, update, delete, hide and customize how their data is shown.
- Customization panel, allowing users to change the site's colours, distributions an typography.

For more information about this project, you can contact me at desarrollo.web_arturo@outlook.com.

## Contributing

This is a personal work in progress that doesn't need any contributions at this time. I expect that to change as soon as a release version is available.

## Current version

### 0.0.4

#### Layout changes:

- `Header.jsx`

  - Added new styles to `Header.jsx`. [Check out the component!](./src/v1/layout/Header/Header.jsx).
  - `Header.jsx` now displays dynamic data depending on the language choosen by the user.

#### Changes in existing components:

- Added styles to `NameBadge.jsx`. [Check out the component!](./src/v1/components/NameBadge/NameBadge.jsx).
- Added styles to `HeaderButton.jsx`. [Check out the component!](./src/v1/components/HeaderButton/HeaderButton.jsx).

#### New components:

- Created the `FlagButton.jsx` component that will toggle the language of the website. [Check out the component!](./src/v1/components/FlagButton/FlagButton.jsx).

#### New features:

- Language management is now handled into `LanguageContext.jsx`. [Check it out!](./src/v1/contexts/LanguageContext.jsx).

**For previous versions, please refer to [PreviousVersions.md](./PreviousVersions.md)**

## Expected changes in the next version (AKA TODO):

- Website's sections handled with react-router-dom.
- Responsive version of `Header.jsx`.
- New contact card for user's info.
