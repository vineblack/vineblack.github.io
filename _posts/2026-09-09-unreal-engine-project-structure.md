---
layout: post
title: "[Unreal Engine] 코드 내려받기부터 프로젝트 구조 파악까지"
date: 2026-09-09
description: GitHub에서 Unreal Engine 프로젝트를 내려받아 실행하고, 핵심 폴더와 에셋 구조를 파악하는 과정을 정리했습니다.
tags: unreal-engine github project-setup project-structure
categories: Technique & Study
featured: false
---

## Overview

Unreal Engine 프로젝트를 처음 전달받으면 어디서부터 확인해야 할지 막막할 수 있다. 저장소를 내려받는 것까지는 어렵지 않지만, 어떤 파일로 프로젝트를 실행해야 하는지, 누락된 에셋은 없는지, 실제 작업에 필요한 블루프린트와 맵은 어디에 있는지 파악하는 과정이 필요하다.

이번 글에서는 GitHub에서 프로젝트 코드를 내려받은 뒤 Unreal Editor에서 정상적으로 실행하고, 주요 폴더와 설정을 따라가며 프로젝트의 전체 구조를 이해한 과정을 정리한다.

## 1. 프로젝트 내려받기

먼저 GitHub 저장소의 `README`를 확인해 사용 중인 Unreal Engine 버전과 별도의 설치 항목이 있는지 살펴봤다. 이후 Git을 이용해 저장소를 Clone했다.

```bash
git clone <repository-url>
cd <project-folder>
```

대용량 에셋을 Git LFS로 관리하는 프로젝트라면 LFS 파일도 함께 받아야 한다.

```bash
git lfs install
git lfs pull
```

ZIP으로 내려받는 방법도 있지만, 이후 변경 사항을 확인하고 업데이트하기 위해서는 Clone 방식이 더 편리했다.

## 2. 실행 전 확인한 파일

프로젝트 루트에서 가장 먼저 확인한 파일은 `.uproject`였다. 이 파일에는 프로젝트가 사용하는 Unreal Engine 버전과 모듈, 플러그인 정보가 포함되어 있다.

- `.uproject`: Unreal Editor에서 프로젝트를 여는 기준 파일
- `Config`: 프로젝트 설정을 보관하는 폴더
- `Content`: 맵, 블루프린트, 머티리얼과 같은 게임 에셋 폴더
- `Source`: C++ 소스 코드와 모듈 정의가 들어 있는 폴더
- `Plugins`: 프로젝트에서 사용하는 추가 플러그인 폴더

`.uproject`를 실행했을 때 엔진 버전이 다르다는 메시지가 표시된다면 바로 변환하기 전에 원본 프로젝트를 별도로 보관하는 것이 안전하다. 필요한 플러그인이 비활성화되어 있거나 설치되지 않은 경우에도 에디터의 안내를 확인해 먼저 환경을 맞췄다.

## 3. C++ 프로젝트 빌드

`Source` 폴더가 있는 C++ 프로젝트는 에디터를 열기 전에 프로젝트 파일 생성과 빌드가 필요할 수 있다. Windows에서는 `.uproject` 파일을 마우스 오른쪽 버튼으로 클릭해 프로젝트 파일을 생성한 뒤 Visual Studio에서 솔루션을 빌드했다.

빌드 오류가 발생하면 다음 항목부터 확인했다.

- 프로젝트가 요구하는 Unreal Engine 버전
- Visual Studio의 **Desktop development with C++** 및 Unreal 관련 구성 요소
- `.uproject`에 선언된 모듈과 플러그인
- 저장소에 포함되지 않은 외부 라이브러리 또는 환경 설정

블루프린트 전용 프로젝트라면 일반적으로 `.uproject` 파일을 바로 실행할 수 있다.

## 4. Unreal Editor에서 시작 지점 찾기

프로젝트가 열리면 모든 에셋을 무작정 살펴보기보다 실제 실행 흐름을 기준으로 구조를 따라갔다.

1. `Project Settings > Maps & Modes`에서 기본 맵을 확인했다.
2. 기본 맵을 열어 `World Settings`에 지정된 GameMode를 확인했다.
3. GameMode에서 Player Controller, Pawn 또는 Character 클래스를 찾았다.
4. 해당 블루프린트의 이벤트와 참조 에셋을 따라가며 핵심 기능의 위치를 정리했다.

이 순서로 확인하면 프로젝트가 시작될 때 어떤 맵이 열리고, 플레이어 입력과 캐릭터 제어가 어디에서 처리되는지 비교적 빠르게 파악할 수 있었다.

## 5. 주요 폴더 구조

프로젝트 폴더는 역할에 따라 다음과 같이 구분할 수 있었다.

- `Content`: 맵, 블루프린트, 머티리얼, 텍스처 등 에셋이 저장되는 폴더
- `Config`: 입력, 렌더링, 프로젝트 기본값이 기록되는 설정 폴더
- `Source`: C++ 클래스와 모듈 코드가 들어 있는 폴더
- `Plugins`: 프로젝트 전용 또는 외부 플러그인이 위치하는 폴더
- `Binaries`: 컴파일된 실행 파일과 모듈이 생성되는 폴더
- `Intermediate`: 빌드 과정에서 만들어지는 중간 파일 폴더
- `Saved`: 로그, 자동 저장, 백업 파일이 기록되는 폴더
- `DerivedDataCache`: 셰이더와 에셋 처리 결과를 캐시하는 폴더

`Binaries`, `Intermediate`, `Saved`, `DerivedDataCache`는 환경에 따라 다시 생성될 수 있는 폴더다. 반면 `Content`, `Config`, `Source`, `Plugins`, `.uproject`는 프로젝트의 핵심이므로 삭제하거나 변경할 때 주의해야 한다.

## Troubleshooting / Learnings

가장 자주 마주친 문제는 엔진 버전 차이, 누락된 플러그인, Git LFS로 관리되는 에셋의 다운로드 누락이었다. 에셋이 비어 있거나 텍스처가 정상적으로 보이지 않을 때는 저장소를 다시 받기보다 먼저 Git LFS 상태를 확인하는 편이 효과적이었다.

C++ 모듈 오류는 프로젝트 파일을 다시 생성하고 올바른 IDE 환경에서 빌드하면 해결되는 경우가 많았다. 그래도 문제가 남아 있다면 `Saved/Logs`의 로그를 확인해 최초로 발생한 오류부터 추적하는 것이 중요했다.

무엇보다 프로젝트 구조를 이해할 때는 폴더 전체를 순서대로 읽는 것보다 **기본 맵 → GameMode → Player Controller → Pawn/Character**의 실행 흐름을 따라가는 방식이 효율적이었다.

## Result

프로젝트를 정상적으로 실행하고, 주요 폴더와 설정 파일이 어떤 역할을 하는지 구분할 수 있게 되었다. 또한 새로운 기능을 수정하거나 에셋을 추가할 때 어느 위치부터 확인해야 하는지 기준을 세울 수 있었다.

다음 글에서는 시작 맵을 기준으로 블루프린트 사이의 참조 관계를 분석하고, 입력이 캐릭터 동작으로 이어지는 흐름을 더 구체적으로 정리할 예정이다.
