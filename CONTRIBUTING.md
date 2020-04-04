# Contribution Guide for Codebase

This is a general contribution guide for Anti-Cheat Online (WIP)

## Making contributions
To make any contributions to this project, *DO NOT* push directly to `master`.

Instead of that, here are the steps:

1. From master, create a branch using: `git checkout -b branchname`
2. Make changes in this branch
3. Use `git add` to stage changes
4. Use `git commit` to commit those staged changes
5. Push new to GitLab using `git push --set-upstream origin branchname` (only need to do this once, the rest of the time, you can use `git push`)

Continue working on this branch until your changes/feature have been implemented. Once you are ready to put these changes in master:

1. `add`, `commit`, and `push` any changes
2. Checkout `master` and `pull` any changes that may have been merged since you began working
3. Checkout your new branch (`git checkout branchname`) and use `git merge master` to merge those changes into your branch
4. Resolve any conflicts (working with other devs as necessary)
5. Use `git push` to push your changes remotely

Now we have a branch that has all changes in `master` PLUS the development you have done, and now we want to merge those back into master. Here's what you do:

When you use `git push`, if there are commits (and it doesn't say `Already up to date.`) you will get back a link to create a "Merge Request" in GitLab. Name this request, add details on the changes you made, and click "Submit Request".

Copy the URL and send it to the `#merge-requests` channel in the Discord, and tag any people who are necessary.

## Being tagged in an MR

If you are tagged in or otherwise asked to help with a merge request, check the MR link and make comments based on the diff.

Things to mark:
1. Blockers - anything that is blocking the merge and absoultely needs to be resolved
2. Questions - these may or may not be blockers, but should be resolved and at least discussed prior to merging
3. Nitpicks - marked with `[nit]`, these are small changes and are not blockers. Should still have discussion and be resolved before merging

Before merging, all discussions *MUST* be resolved (the person who started the discussion is the "resolver"). Once those have all been resolved and there is a "thumbs up" on the MR (and all CI/CD pipelines have passed), anyone can merge it, so if you are a `reviewer` and have resolved all the discussions, feel free to merge, and make the `requester` aware.

Feel free to delete or keep the source branch at your own discretion.
