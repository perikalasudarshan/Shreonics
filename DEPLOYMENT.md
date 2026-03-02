# GitHub Pages Deployment Instructions

1. Make sure your project is committed to a GitHub repository.
2. Push your latest changes to GitHub.

> **TIP:** Set up a personal access token for automated deployments.
> 
> 1. On GitHub, go to **Settings > Developer settings > Personal access tokens**
>    and generate a token with at least `repo` scope.
> 2. In your repository, open **Settings > Secrets > Actions** and create a
>    new secret named `GH_PAGES_TOKEN` with the value of your token.
> 3. The workflow is already configured to use this secret when publishing.

3. In your repo, go to Settings > Pages.
4. Set the source to the `dist` folder (from the `gh-pages` branch or main branch, depending on your workflow).
5. If you want to automate deployment, use the following GitHub Actions workflow:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches:
      - main
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

6. After deployment, your site will be available at `https://<username>.github.io/<repo>/`.

## Automated deployment with GitHub Actions

A workflow is included in `.github/workflows/deploy.yml` that builds and publishes the `dist` directory every time a commit is pushed to the `main` branch. Simply:

```bash
# push your changes to main
git checkout main
git merge dev        # or whatever branch you work on
git push origin main
```

GitHub will then run the job, and once it completes the Pages site will update automatically.

You no longer need to manually copy `dist/` into any branch; the action handles it for you.

> **Note:** If the workflow fails with a 403 error similar to
> `remote: Permission to ... denied to github-actions[bot]`, make sure that:
>
> 1. The repository is hosted under a GitHub account where your workflow has
>    push permissions (organization repositories may require additional
>    configuration).
> 2. GitHub Actions is allowed to create and push to the `gh-pages` branch in
>    **Settings > Actions > General** (enable "Allow GitHub Actions to create
>    and approve pull requests" or similar permissions).
> 3. The workflow file includes the appropriate `permissions:` block as shown
>    above.


---

## Manual Deployment

1. Build your site: `npm run build`
2. Copy the contents of `dist/` to a branch named `gh-pages`.
3. Push the `gh-pages` branch to GitHub.
4. Set GitHub Pages source to `gh-pages` branch in repo settings.
