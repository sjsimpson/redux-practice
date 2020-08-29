## Mirrored project from GitLab

this project is mirrored in GCP source repository to leverage google CI/CD

updating to see that pushing works

another update of yaml

#### Installing proper TypeScript, Webpack, React and Babel dependencies
#### They are all listed in package.json

`yarn add --dev typescript`
`yarn add --dev @types/react @types/react-dom @types/react-redux`


## TO DO
- [X] Set up React App
- [X] Figure out TypeScript, Babel, and Webpack
- [X] Setup TypeScript with React elements
- [X] Setup TypeScript with Redux
- [X] Deploy React App on Docker
- [>] Setup Dev, Staging, and Prod environments
  - [>] Setup cloudbuild.yaml files for each stage
  - [ ] Setup instances that pull dev, staging, and prod environments
  - [ ] Setup instance groups for each and figure out how to map them to a static IP