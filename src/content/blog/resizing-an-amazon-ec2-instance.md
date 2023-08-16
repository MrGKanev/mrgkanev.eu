---
author: Gabriel Kanev
pubDatetime: 2023-08-17T10:00:00.000Z
title: Resizing an Amazon EC2 Instance
postSlug: resizing-an-amazon-ec2-instance
featured: false
ogImage: ""
tags:
  - Amazon
  - EC2
  - AWS
description: Another day and another EC2 instance to resize.
---
Resizing your EBS-backed instances has been really simplified by Amazon in the last couple of years.

### Compatibility checks:

Prior to initiating instance resizing, three compatibility checks need to be satisfied:

* Platform - 32 or 64-bit instances cannot be resized to the other.
* Virtualization type - You cannot resize an instance from HVM to a PM or vice verca.
* Network - Certain instance types are incompatible with EC2-Classic and necessitate launching within a VPC.

### Resizing:

1. Open the EC2 console
2. Select the instance and stop it
3. Selected the instance, choose Actions > Instance Settings > Change Instance Type - top right corner
4. Choose which instance you would like to resize to - note that the list will only show compatible instance types.
5. Once applied, start the stopped instance - DON'T forget to start the instance. I had 3 mins downtime because I forgot ...