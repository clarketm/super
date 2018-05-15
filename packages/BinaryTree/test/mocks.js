//
//              5
//            /   \
//           3     7
//         /  \   /  \
//        2   4  6    8
//       /             \
//      1              9
//

export const preOrderArray = [
  {
    _value: 5,
    _left: {
      _value: 3,
      _left: {
        _value: 2,
        _left: {
          _value: 1,
          _left: null,
          _right: null
        },
        _right: null
      },
      _right: {
        _value: 4,
        _left: null,
        _right: null
      }
    },
    _right: {
      _value: 7,
      _left: {
        _value: 6,
        _left: null,
        _right: null
      },
      _right: {
        _value: 8,
        _left: null,
        _right: {
          _value: 9,
          _left: null,
          _right: null
        }
      }
    }
  },
  {
    _value: 3,
    _left: {
      _value: 2,
      _left: {
        _value: 1,
        _left: null,
        _right: null
      },
      _right: null
    },
    _right: {
      _value: 4,
      _left: null,
      _right: null
    }
  },
  {
    _value: 2,
    _left: {
      _value: 1,
      _left: null,
      _right: null
    },
    _right: null
  },
  {
    _value: 1,
    _left: null,
    _right: null
  },
  {
    _value: 4,
    _left: null,
    _right: null
  },
  {
    _value: 7,
    _left: {
      _value: 6,
      _left: null,
      _right: null
    },
    _right: {
      _value: 8,
      _left: null,
      _right: {
        _value: 9,
        _left: null,
        _right: null
      }
    }
  },
  {
    _value: 6,
    _left: null,
    _right: null
  },
  {
    _value: 8,
    _left: null,
    _right: {
      _value: 9,
      _left: null,
      _right: null
    }
  },
  {
    _value: 9,
    _left: null,
    _right: null
  }
];
export const inOrderArray = [
  {
    _value: 1,
    _left: null,
    _right: null
  },
  {
    _value: 2,
    _left: {
      _value: 1,
      _left: null,
      _right: null
    },
    _right: null
  },
  {
    _value: 3,
    _left: {
      _value: 2,
      _left: {
        _value: 1,
        _left: null,
        _right: null
      },
      _right: null
    },
    _right: {
      _value: 4,
      _left: null,
      _right: null
    }
  },
  {
    _value: 4,
    _left: null,
    _right: null
  },
  {
    _value: 5,
    _left: {
      _value: 3,
      _left: {
        _value: 2,
        _left: {
          _value: 1,
          _left: null,
          _right: null
        },
        _right: null
      },
      _right: {
        _value: 4,
        _left: null,
        _right: null
      }
    },
    _right: {
      _value: 7,
      _left: {
        _value: 6,
        _left: null,
        _right: null
      },
      _right: {
        _value: 8,
        _left: null,
        _right: {
          _value: 9,
          _left: null,
          _right: null
        }
      }
    }
  },
  {
    _value: 6,
    _left: null,
    _right: null
  },
  {
    _value: 7,
    _left: {
      _value: 6,
      _left: null,
      _right: null
    },
    _right: {
      _value: 8,
      _left: null,
      _right: {
        _value: 9,
        _left: null,
        _right: null
      }
    }
  },
  {
    _value: 8,
    _left: null,
    _right: {
      _value: 9,
      _left: null,
      _right: null
    }
  },
  {
    _value: 9,
    _left: null,
    _right: null
  }
];
export const postOrderArray = [
  {
    _value: 1,
    _left: null,
    _right: null
  },
  {
    _value: 2,
    _left: {
      _value: 1,
      _left: null,
      _right: null
    },
    _right: null
  },
  {
    _value: 4,
    _left: null,
    _right: null
  },
  {
    _value: 3,
    _left: {
      _value: 2,
      _left: {
        _value: 1,
        _left: null,
        _right: null
      },
      _right: null
    },
    _right: {
      _value: 4,
      _left: null,
      _right: null
    }
  },
  {
    _value: 6,
    _left: null,
    _right: null
  },
  {
    _value: 9,
    _left: null,
    _right: null
  },
  {
    _value: 8,
    _left: null,
    _right: {
      _value: 9,
      _left: null,
      _right: null
    }
  },
  {
    _value: 7,
    _left: {
      _value: 6,
      _left: null,
      _right: null
    },
    _right: {
      _value: 8,
      _left: null,
      _right: {
        _value: 9,
        _left: null,
        _right: null
      }
    }
  },
  {
    _value: 5,
    _left: {
      _value: 3,
      _left: {
        _value: 2,
        _left: {
          _value: 1,
          _left: null,
          _right: null
        },
        _right: null
      },
      _right: {
        _value: 4,
        _left: null,
        _right: null
      }
    },
    _right: {
      _value: 7,
      _left: {
        _value: 6,
        _left: null,
        _right: null
      },
      _right: {
        _value: 8,
        _left: null,
        _right: {
          _value: 9,
          _left: null,
          _right: null
        }
      }
    }
  }
];
export const levelOrderArray = [
  {
    _value: 5,
    _left: {
      _value: 3,
      _left: {
        _value: 2,
        _left: {
          _value: 1,
          _left: null,
          _right: null
        },
        _right: null
      },
      _right: {
        _value: 4,
        _left: null,
        _right: null
      }
    },
    _right: {
      _value: 7,
      _left: {
        _value: 6,
        _left: null,
        _right: null
      },
      _right: {
        _value: 8,
        _left: null,
        _right: {
          _value: 9,
          _left: null,
          _right: null
        }
      }
    }
  },
  {
    _value: 3,
    _left: {
      _value: 2,
      _left: {
        _value: 1,
        _left: null,
        _right: null
      },
      _right: null
    },
    _right: {
      _value: 4,
      _left: null,
      _right: null
    }
  },
  {
    _value: 7,
    _left: {
      _value: 6,
      _left: null,
      _right: null
    },
    _right: {
      _value: 8,
      _left: null,
      _right: {
        _value: 9,
        _left: null,
        _right: null
      }
    }
  },
  {
    _value: 2,
    _left: {
      _value: 1,
      _left: null,
      _right: null
    },
    _right: null
  },
  {
    _value: 4,
    _left: null,
    _right: null
  },
  {
    _value: 6,
    _left: null,
    _right: null
  },
  {
    _value: 8,
    _left: null,
    _right: {
      _value: 9,
      _left: null,
      _right: null
    }
  },
  {
    _value: 1,
    _left: null,
    _right: null
  },
  {
    _value: 9,
    _left: null,
    _right: null
  }
];
