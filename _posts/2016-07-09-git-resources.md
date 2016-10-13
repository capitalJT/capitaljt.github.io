---
layout: post
title:  "Git Resources"
date:   2016-07-09 00:58:19 -0700
author: Jay Tizzle
categories: blog post
---


- [Hello World - Git Tutorial](https://guides.github.com/activities/hello-world/)
- [Git Style Guide](https://github.com/agis-/git-style-guide)
- [Git Branch Naming Best Practices](http://stackoverflow.com/questions/273695/git-branch-naming-best-practices)
- [Pretty git branch graphs](http://stackoverflow.com/questions/1057564/pretty-git-branch-graphs)
- [Basic git commands](https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html)

<hr>  

Add blah  
`git git commit -m "init commit"`  
`git remote add origin https://github.com/capitalJT/new-repo.git`   
`git push origin master`  



### Some initial stuff
initialize git in a repository  
    
    git init

<br>
find the status  

    git status

<br>
Adds individual file  

    git add README.md

<br>
This adds all files in the repository to staging  

    git add .

This adds, modifies, and removes index entries to match the working tree.

    git add --all

This used interactive mode.

    git add -i

**look at git patch skitch note**

This is a wildcard that tells git to only stage files with html extensions

    git add *.html

Remove files

    git rm
---
### Git Commit
commit the changes to the repo

    git commit -m ‘First commit'

commit add all changes on tracked files and include message

    git commit -am "Comment Added"

Shortcut command:  add all changes to the stage, commit and reuse existing commit message from the previous commit

    git commit --amend -C HEAD
---
### Git Push
push the commits to a remote repository

    git remote add origin https://github.com/capitalJT/github-tut.git

push to master

    git push -u origin master

push to github pages

    git push -u origin gh-pages
    ---
### Git Stash
[https://git-scm.com/docs/git-stash](https://git-scm.com/docs/git-stash)  
`git stash list [<options>]`  
`git stash show [<stash>]`  
`git stash drop [-q|--quiet] [<stash>]`  
`git stash ( pop | apply ) [--index] [-q|--quiet] [<stash>]`  
`git stash branch <branchname> [<stash>]`  
`git stash [save [-p|--patch] [-k|--[no-]keep-index] [-q|--quiet]`  
         `[-u|--include-untracked] [-a|--all] [<message>]]`  
`git stash clear`  
`git stash create [<message>]`  
`git stash store [-m|--message <message>] [-q|--quiet] <commit>`  
