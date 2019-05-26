export function invalidClassNames(name) {
    return !!name;
}

export function classnames(...names) {
  return names.filter(invalidClassNames).join(" ");
}

export function noop() {}
