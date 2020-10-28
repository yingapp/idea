window.worker.postMessage({
    clearUsers: {
        张山: {
            _setting: {
                relayBase: 'http://yingrelay.herokuapp.com',/**中继torrent文件，见 https://github.com/yingapp/relay **/
                guard: true,/**有密码保护 **/
            },
            profile: {/**用户**/
                name: '张山',
                birthyear: 1980,
                height: 175,
                weight: 70,
                manner: {
                    avatar: '',/**小图标，可以在对话框中按'/'后，浏览到对应目录，如/profile（用户)后，输入/avatar后，选文件修改，以下类似**/
                    bigavatar: '',/**大图标**/
                    themes: {/**主题**/
                        light: {
                            bar: {
                                backgroundColor: 'transparent',
                            },
                            option: {
                                backgroundColor: 'white',
                            },
                            paper: {
                                backgroundColor: 'white',
                            },
                            button: {
                                backgroundColor: '#f1f3f5',
                                focus: {
                                    backgroundColor: '#e1e3e5',
                                }
                            },
                            input: {
                                backgroundColor: '#eaebec',
                                focus: {
                                    backgroundColor: '#d1d3d5',
                                }
                            },
                            bubble: {
                                color: 'white',
                                backgroundColor: '#000095'
                            },
                            avatar: {
                                color: '#000095',
                                backgroundColor: 'green',
                                focus: {
                                    color: 'white',
                                    backgroundColor: '#000095',
                                }
                            },
                            token: {
                                color: '#000095',
                                backgroundColor: 'transparent',
                            },
                            iconButton: {
                                color: '#000095',
                                backgroundColor: 'white',
                                focus: {
                                    color: 'white',
                                    backgroundColor: '#000095',
                                }
                            },
                            fab: {
                                color: '#000095',
                                backgroundColor: 'white',
                                focus: {
                                    color: 'white',
                                    backgroundColor: '#000095',
                                }
                            },
                        },
                        dark: {
                            bar: {
                                backgroundColor: 'transparent',
                            },
                            option: {
                                backgroundColor: '#1f1f1f',
                            },
                            paper: {
                                backgroundColor: '#1f1f1f',
                            },
                            backgroundColor: {
                                backgroundColor: '#1f1f1f',
                            },
                            button: {
                                backgroundColor: '#282c2f',
                                focus: {
                                    backgroundColor: '#3c4043',
                                }
                            },
                            input: {
                                backgroundColor: '#1a1a1a',
                                focus: {
                                    backgroundColor: '#101010',
                                }
                            },
                            bubble: {
                                color: 'white',
                                backgroundColor: '#000095'
                            },
                            avatar: {
                                color: 'white',
                                backgroundColor: 'green',
                                focus: {
                                    color: 'white',
                                    backgroundColor: '#101010',
                                }
                            },
                            token: {
                                color: 'white',
                                backgroundColor: 'transparent',
                            },
                            iconButton: {
                                color: 'lightgray',
                                backgroundColor: '#1f1f1f',
                                focus: {
                                    color: 'white',
                                    backgroundColor: 'darkgreen',
                                }
                            },
                            fab: {
                                color: 'lightgray',
                                backgroundColor: '#1f1f1f',
                                focus: {
                                    color: 'white',
                                    backgroundColor: 'darkgreen',
                                }
                            },
                        },
                    }
                }
            },
            alias: {/**别名**/
                birthyear: '年龄',
            },
            intents: {/**意图，包含数据和应用的集合**/
                _chat: {/** 内置对话意图 **/
                    id: 'chat',
                    apps: {
                        botChat: {
                            url: 'https://yingview.herokuapp.com',
                            aid: 'chat',
                            template: {
                                data: {
                                    extract: {
                                        '*': true,
                                    }
                                },
                                message: {
                                    extract: {
                                        '*': true
                                    }
                                }
                            },
                            nest: 'chat',
                        }
                    }
                },
                _page: {/** 内置用户意图 **/
                    id: '_page',
                    apps: {
                        userPage: {
                            url: 'https://yingview.herokuapp.com',
                            aid: 'page',
                            template: {
                                data: {
                                    extract: {
                                        '*': true,
                                    }
                                },
                                message: {
                                    extract: {
                                        '*': true
                                    }
                                }
                            },
                            nest: 'stage',
                        }
                    }
                },
                声音: {
                    aid: 'shengyin',/**应用识别的标志**/
                    descript: '声音',
                    profile: {
                        name: '声音'
                    },
                    apps: {
                        '声音': {
                            url: 'https://yingapps.herokuapp.com/sound/index.html',/**可以通过对话框输入单个js文件或zip文件，进一步通过torrent共享**/
                            aid: 'shengyin',
                            template: {
                                data: {
                                    extract: {
                                        intents: {
                                            声音: {
                                                data: {
                                                    '*': true,
                                                },
                                                profile: {
                                                    '*': true,
                                                }
                                            }
                                        }
                                    },
                                    rename: {
                                        intents: {
                                            shengyin: '声音',
                                        }
                                    },
                                },
                                message: {
                                    rename: {
                                        intents: {
                                            声音: 'shengyin',
                                        }
                                    },
                                    extract: {
                                        intents: {
                                            声音: {
                                                data: {
                                                    '*': true,
                                                },
                                                profile: {
                                                    '*': true,
                                                }
                                            }
                                        },
                                    },
                                },
                            },
                            nest: 'stage',/**加载到对应的位置，这里是前台dom，如果'backstage'，app将不会被移除**/
                        },
                    },
                },
                音乐: {
                    aid: 'yinyue',
                    descript: '音乐',
                    profile: {
                        name: '音乐'
                    },
                    apps: {
                        音乐: {
                            url: 'https://yingapps.herokuapp.com/music/index.html',
                            aid: 'yinyue',
                            template: {
                                data: {
                                    extract: {
                                        intents: {
                                            音乐: {
                                                data: {
                                                    '*': true,
                                                },
                                                profile: {
                                                    '*': true,
                                                }
                                            }
                                        }
                                    },
                                    rename: {
                                        intents: {
                                            yinyue: '音乐',
                                        }
                                    },
                                },
                                message: {
                                    rename: {
                                        intents: {
                                            音乐: 'yinyue',
                                        }
                                    },
                                    extract: {
                                        intents: {
                                            音乐: {
                                                data: {
                                                    '*': true,
                                                },
                                                profile: {
                                                    '*': true,
                                                }
                                            }
                                        },
                                    },
                                },
                            },
                            nest: 'stage',
                        },
                    },
                },
            },
            spread: {/**广播意图**/
                ying: {/**共享给ying，他人可以搜索到**/
                    code: 'dvlldpddgldfp120dfvcs0sklc',/**校对口令，不同用户的区别**/
                    template: {
                        data: {
                            extract: {/**过滤，见 https://github.com/liip/fanci **/
                                intents: {
                                    _view: {
                                        '*': true
                                    },
                                    音乐: {
                                        aid: true,
                                        descript: true,
                                        profile: { '*': true },
                                        apps: { '*': true },
                                        data: {
                                            volume: true,
                                            metas: {
                                                '*': true
                                            }
                                        }
                                    },
                                    声音: {
                                        aid: true,
                                        descript: true,
                                        profile: { '*': true },
                                        apps: { '*': true },
                                        data: {
                                            volume: true,
                                            metas: {
                                                '*': true
                                            }
                                        }
                                    },
                                },
                                user: {/**直接添加在过滤后的用户数据（不变的数据）**/
                                }
                            },
                            李四: {/**用户之间的数据广播**/
                                code: 'sasfsdfpv',/**和李四相同**/
                                password: 'sadsdfomd01312dsnkssddfretrttrg',/**和李四相同，只有code和password相同的用户之间才能传播数据**/
                                template: {
                                    data: {/**传出处理**/
                                        transform: {
                                            intents: {
                                                xun: {
                                                    data: {
                                                        steps: 'intents.策划.data.尉武.send'
                                                    }
                                                },
                                            }
                                        },
                                    },
                                    message: {/**传入处理**/
                                        transform: {
                                            spread: {
                                                尉武: {
                                                    data: {
                                                        intents: 'intents',
                                                        profile: 'profile'
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                data: {/**传出的用户信息**/
                                    profile: {
                                        name: '李四',
                                    },
                                    intents: {
                                    }
                                }
                            },
                        }
                    },
                }
            }
        }
    },
});