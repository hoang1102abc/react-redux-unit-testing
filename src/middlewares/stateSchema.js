export default {
  $schema: "http://json-schema.org/draft-07/schema",
  $id: "http://example.com/example.json",
  type: "object",
  title: "The root schema",
  description: "The root schema comprises the entire JSON document.",
  default: {},
  examples: [
    {
      list: ["Comment 1", "Comment 2"],
      auth: true
    }
  ],
  required: ["list", "auth"],
  additionalProperties: true,
  properties: {
    list: {
      $id: "#/properties/list",
      type: "array",
      title: "The list schema",
      description: "An explanation about the purpose of this instance.",
      default: [],
      examples: [["Comment 1", "Comment 2"]],
      additionalItems: true,
      items: {
        anyOf: [
          {
            $id: "#/properties/list/items/anyOf/0",
            type: "string",
            title: "The first anyOf schema",
            description: "An explanation about the purpose of this instance.",
            default: "",
            examples: ["Comment 1", "Comment 2"]
          }
        ],
        $id: "#/properties/list/items"
      }
    },
    auth: {
      $id: "#/properties/auth",
      type: "boolean",
      title: "The auth schema",
      description: "An explanation about the purpose of this instance.",
      default: false,
      examples: [true]
    }
  }
};
