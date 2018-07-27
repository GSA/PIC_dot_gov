#!/bin/sh
git status;
git add .;
git commit -m "My initial commit message";
git push origin dev;
git branch -f master HEAD;
git push -f origin master;

