const rituals_factory_abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "service",
        type: "address",
        internalType: "contract IRitualService",
      },
      {
        name: "sender",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "addGoal",
    inputs: [
      {
        name: "activity",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "metric",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "target",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "description",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "addTags",
    inputs: [
      {
        name: "tags",
        type: "bytes32[]",
        internalType: "bytes32[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "claim",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "cloneFrom",
    inputs: [
      {
        name: "ritualToClone",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "get",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct Types.RitualInfo",
        components: [
          {
            name: "title",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "ritualAddress",
            type: "address",
            internalType: "address",
          },
          {
            name: "creator",
            type: "address",
            internalType: "address",
          },
          {
            name: "isPrivate",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "isPublished",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "isOngoing",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "isFinished",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "timeCreated",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "startDate",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "endDate",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "joinCutoff",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "capacity",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "description",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "version",
            type: "string",
            internalType: "string",
          },
          {
            name: "schedule",
            type: "tuple[7]",
            internalType: "struct Types.DayTime[7]",
            components: [
              {
                name: "day",
                type: "uint8",
                internalType: "enum Types.Day",
              },
              {
                name: "timeInSeconds",
                type: "uint256",
                internalType: "uint256",
              },
            ],
          },
          {
            name: "tags",
            type: "bytes32[]",
            internalType: "bytes32[]",
          },
          {
            name: "members",
            type: "tuple[]",
            internalType: "struct Types.Member[]",
            components: [
              {
                name: "account",
                type: "address",
                internalType: "address payable",
              },
              {
                name: "active",
                type: "bool",
                internalType: "bool",
              },
              {
                name: "claimed",
                type: "bool",
                internalType: "bool",
              },
              {
                name: "points",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "streak",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "lastCheckinTime",
                type: "uint256",
                internalType: "uint256",
              },
            ],
          },
          {
            name: "goals",
            type: "tuple[]",
            internalType: "struct Types.Goal[]",
            components: [
              {
                name: "activity",
                type: "bytes32",
                internalType: "bytes32",
              },
              {
                name: "metric",
                type: "bytes32",
                internalType: "bytes32",
              },
              {
                name: "target",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "description",
                type: "string",
                internalType: "string",
              },
            ],
          },
          {
            name: "metadata",
            type: "tuple[]",
            internalType: "struct Types.Metadata[]",
            components: [
              {
                name: "key",
                type: "bytes32",
                internalType: "bytes32",
              },
              {
                name: "value",
                type: "bytes",
                internalType: "bytes",
              },
            ],
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getMember",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct Types.Member",
        components: [
          {
            name: "account",
            type: "address",
            internalType: "address payable",
          },
          {
            name: "active",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "claimed",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "points",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "streak",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "lastCheckinTime",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getMetadata",
    inputs: [
      {
        name: "key",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "initialize",
    inputs: [
      {
        name: "isPrivate",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "startDate",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "endDate",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "joinCutoff",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "capacity",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "title",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "description",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "tags",
        type: "bytes32[]",
        internalType: "bytes32[]",
      },
      {
        name: "schedule",
        type: "tuple[7]",
        internalType: "struct Types.DayTime[7]",
        components: [
          {
            name: "day",
            type: "uint8",
            internalType: "enum Types.Day",
          },
          {
            name: "timeInSeconds",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "isActiveMember",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isFinished",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isOngoing",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "join",
    inputs: [],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "leave",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "onAttest",
    inputs: [
      {
        name: "attestation",
        type: "tuple",
        internalType: "struct Attestation",
        components: [
          {
            name: "uid",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "schema",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "time",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "expirationTime",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "revocationTime",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "refUID",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "recipient",
            type: "address",
            internalType: "address",
          },
          {
            name: "attester",
            type: "address",
            internalType: "address",
          },
          {
            name: "revocable",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "data",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "onRevoke",
    inputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct Attestation",
        components: [
          {
            name: "uid",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "schema",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "time",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "expirationTime",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "revocationTime",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "refUID",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "recipient",
            type: "address",
            internalType: "address",
          },
          {
            name: "attester",
            type: "address",
            internalType: "address",
          },
          {
            name: "revocable",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "data",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "publish",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "removeGoal",
    inputs: [
      {
        name: "index",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "removeTag",
    inputs: [
      {
        name: "tag",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setCapacity",
    inputs: [
      {
        name: "max",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setCutoff",
    inputs: [
      {
        name: "date",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setDescription",
    inputs: [
      {
        name: "description",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setEndDate",
    inputs: [
      {
        name: "date",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setMetadata",
    inputs: [
      {
        name: "key",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "value",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setPoints",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
      {
        name: "points",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setPrivate",
    inputs: [
      {
        name: "isPrivate",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setSchedule",
    inputs: [
      {
        name: "schedule",
        type: "tuple[7]",
        internalType: "struct Types.DayTime[7]",
        components: [
          {
            name: "day",
            type: "uint8",
            internalType: "enum Types.Day",
          },
          {
            name: "timeInSeconds",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setStartDate",
    inputs: [
      {
        name: "date",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setStreak",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
      {
        name: "streak",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setTitle",
    inputs: [
      {
        name: "title",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateStreak",
    inputs: [
      {
        name: "attestation",
        type: "tuple",
        internalType: "struct Attestation",
        components: [
          {
            name: "uid",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "schema",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "time",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "expirationTime",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "revocationTime",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "refUID",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "recipient",
            type: "address",
            internalType: "address",
          },
          {
            name: "attester",
            type: "address",
            internalType: "address",
          },
          {
            name: "revocable",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "data",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "version",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "error",
    name: "AccessDenied",
    inputs: [],
  },
  {
    type: "error",
    name: "AlreadyClaimed",
    inputs: [],
  },
  {
    type: "error",
    name: "AlreadyMember",
    inputs: [],
  },
  {
    type: "error",
    name: "AlreadyPublished",
    inputs: [],
  },
  {
    type: "error",
    name: "BadCutOffDate",
    inputs: [],
  },
  {
    type: "error",
    name: "BadTimeOfDay",
    inputs: [],
  },
  {
    type: "error",
    name: "DateInThePast",
    inputs: [],
  },
  {
    type: "error",
    name: "EndDateBeforeStartDate",
    inputs: [],
  },
  {
    type: "error",
    name: "FieldMissing",
    inputs: [],
  },
  {
    type: "error",
    name: "IneligibleToJoin",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidStreakUpdateRequest",
    inputs: [],
  },
  {
    type: "error",
    name: "JoinCutoffExpired",
    inputs: [],
  },
  {
    type: "error",
    name: "MaxAdded",
    inputs: [],
  },
  {
    type: "error",
    name: "MetricUnavailable",
    inputs: [],
  },
  {
    type: "error",
    name: "NotActiveMember",
    inputs: [],
  },
  {
    type: "error",
    name: "NotPublished",
    inputs: [],
  },
  {
    type: "error",
    name: "RitualFull",
    inputs: [],
  },
  {
    type: "error",
    name: "RitualInProgress",
    inputs: [],
  },
  {
    type: "error",
    name: "RitualNotStarted",
    inputs: [],
  },
] as const

export { rituals_factory_abi }