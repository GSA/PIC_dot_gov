#!/bin/sh
echo Enter commit message;
read msg;
git status;
git add .;
git commit -m "$msg";
git push origin dev;
git branch -f master HEAD;
git push -f origin master;

