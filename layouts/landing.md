{{ .RawContent }}

{{ with site.GetPage "/book" }}# {{ .Title }}
{{ range .Sections.ByWeight }}
## [{{ .Title }}]({{ .Permalink }})
{{ .Description }}
{{ range .RegularPagesRecursive.ByWeight }}
- [{{ .Title }}]({{ .Permalink }})
{{ end }}{{ end }}{{ end }}
