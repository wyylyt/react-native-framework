#!/bin/bash
#使用环境变量
echo "进行安卓APK打包"
cd android
rm -rf /app/build/outputs/apk/*
./gradlew assembleRelease
