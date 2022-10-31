# learning_git

How to go about starting git and github

## Why use Git?

Version control system to easily track changes made locally and remotely for files, directories, and projects. Especially when working in a team, overwritting changes is a mess, it's better to be able to work independently on a local version (repository), then push changes for everyone to see (remote respository).

Github is a service that hosts the respositories online to allow collaboration. Git and Github work together to allow you to access them and make changes without disrupting everyone else.

A respository are folders/directories with git intialized to allow the useful stuff to work!!

## Downloading and Installing Git

This is different based on operating systems...

The first thing to do is check if you have it already. Run the following command in your terminal:

```
git --version
```

If you have it will say the version, if not it will prompt you (for Mac??). If not use this link and it should work: https://git-scm.com/download/win

## Creating Github Repository

Go to your github account and click "Respositories". Then click "New". Make sure to add a README.md as it gives info about your project.

This is the remote respository. Notice the README.md file and above it there is a label saying main and 1 branch.

Git utilizes a tree structure to optimze teamwork. This is so members can branch off to work on individual aspects and once ready and tested, merge them back into the where they started. This is the purpose of the main branch, seemingly the origin and finality of all the work done.

## Adding Repository Locally using Git

Before we actually clone the repository, we will first configure our identity, this is important for Git to know who is making changes and if you are allowed to make changes.

Run the following command. Make sure you use the email assigned with GitHub.

```
git config --global user.name <name>
git config --global user.email <email>
```

Now on Github, click the green "Code" button and copy the link for HTTPS. Now in the terminal:

```
git clone <link>
```

This will create the git repository in your directory. Verify it's there and open the folder.

## Git Commands

We will go over the following commands:

- git status
- git add
- git commit
- git push
- git pull
- git checkout
- git rebase
- merging we will do through GitHub :D

One thing to understand when changing your work. Saved local changes are not included for git. For the changes to be considered they must be added. Once added they can be committed. Then once all your changes are done, you can commit your changes. Notice, however, this only done locally. It is not yet reflected on GitHub. For this to be reflected their, you need to push the commits. This will push the changes to the remote repository.

Now if I were to make changes, for other users to see the changes on their local repository, they need to pull the changes from GitHub to their local repository.

The checkout and rebase are for working with branches. Checkout allows you to create, access, and delete branches, while rebase is a bit more complicated, essentially updating the version of the code you made your changes on.

## Adding the HTML page

Let's create an HTML page and add it to the remote respository. I'm calling it index.html. I have also added text to the README.md file.

In the HTML file, type `html:5` and it should auto-generate some code for you. I added a heading with hello world.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
```

Let's reflect this remotely. First we will use this command:

```
git status
```

This is used to summarize the status of your changes. It generalizes the changes by the file that has changed. Notice that it knows README.md was altered, and that the HTML file was created, but it doesn't know whether it should track it.

First, let's say that our changes in the README.md are ready to be committed. Through the terminal use:

```
git add -p
```

This is an interactive way to see what specific changes are applied for each file. It can be tedious but it is the best way to make sure everything is good. Type y for yes, n for no, the rest are irrelevant. Type y for this case. Now check the status.

Now it sees thatthe changes are ready to be committed. But we still need to consider index.html. Use the following command to track it.

```
git add index.html
```

Now they are both considered, so we can commit and then push the changes.

A commit requires a message so others can understand what this commit does. Usually the task (story) code is used and a description of the change. The command to use is

```
git commit -m "Added HTML Page"
```

You should see a message that summarizes your changes. Now you can push the changes. Since there is only one branch and you are on that branch, it should work fine.

```
git push
```

If we go to our GitHub page, it should be there. You can see the commits in the project and see the commit history.

## Adding the CSS file Using Branch

We will now create a new branch to add our changes, and then merge it back to the main branch. The first thing we want to do is make sure we are updating the latest version.

```
git pull
```

It should say "Already up to date."

Let's create a new branch, that can be done using the following command. I like to use "\<name>\_<branch-name>". The `-b` option is to create a new branch.

```
git checkout -b "aryan_adding-css"
```

So now you are in a different branch. To see the branches, use the command:

```
git branch
```

Let's create the CSS file and style the heading. Make sure to also add the link so the HTML file can use the CSS file. Make another change to the README.file if you would like.

Repeat the same process as above using these commands:

```
git status
git add -p
git commit -m "..."
```

Now when we try to push, there will be an error. This is because we are in a different branch and need to set where we want to push our changes. The reccommended command is usually what you want to use that, don't be bothered to memorize it.

With that done, let's check the GitHub page. Notice there are 2 branches now and we can see them both. Click "Create Pull Request". With the pull request, we can allow others to approve or comment on your changes before it is merged to the main branch. You can also add dependencies and security checks to make sure everything is running properly. Now click the arrow beside the "Merge pull request" button and select "Squash and Merge". To explain why, let's imagine a scenario where it took you 72 commmits to finally be satisfied with your work. Maybe along the way you went back on your changes. It isn't ideal to have all your commmits be forced upon everyone else, so it squashes all your commits into 1 commit so it's clean and easy for everyone else.

Once merged, you can delete the branch (normally you should) but I'll keep it for now.

Now let's go back to our main branch. Use the following command:

```
git checkout main
```

Notice that it has not yet updated. That is because our changes were merged remotely and not locally. Let's fix this by pulling our changes.

```
git pull
```

Now as you can see all the changes are on our local main branch.

## Final Remarks

Git can be very tricky and frustrating to use in the beginning. (I once lost my entire backend with Git) But the good thing is that you can almost always get it back with the commit history (or spamming ctrl-z). One resource I would reccommend is https://gitexplorer.com/. It's not super formal like documentation and makes it easy to find what command you are looking for.

Now in practice, you may need to rebase a lot, and it's hard to show how to do it with one user, but I will explain below how it happens and how to resolve it.

### Git Rebase

Suppose there are 2 users, A and B. A creates a branch from the main branch to make some changes, and so does B. A merges their changes to the main branch. Now B finishes their changes and
attempts to merge their changes. However, since their changes are reflected onto an older version of the main branch, before A changed it, it must rebase. Thus, the following command must be used.

```
git rebase 'origin/main'
```

Now, rebasing can sometimes be done automatically, but sometimes manual changes must be done. Suppose A made a change on the same line you made a change on as well. Whose line is the right one? Git can't decide this, so it is a conflict. This is a case where A and B need to communicate and decide how to fix this issue together and decide whether to keep A's change, B's change, none of their changes, or a mix of both of their changes.
