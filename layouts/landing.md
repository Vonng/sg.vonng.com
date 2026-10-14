{{- /* 首页的 Markdown 输出（复制为 Markdown / LLM）：标题、简介、正文，然后列出全书目录与两类查询入口。
       全部取自真实分区，只列出已有正式正文的章节；不另存第二份目录。 */ -}}
{{- .Page.Store.Set "tdOutputFormat" "markdown" -}}
# {{ .Title | strings.TrimSpace }}
{{- with .Description | strings.TrimSpace }}

> {{ replace . "\n" "\n> " }}
{{- end }}
{{- with .RawContent | strings.TrimSpace }}

{{ . }}
{{- end }}
{{- with site.GetPage "/book" }}

## [{{ .LinkTitle }}]({{ .Permalink }})
{{- range .Sections.ByWeight }}{{ if .RegularPagesRecursive }}

### [{{ .LinkTitle }}]({{ .Permalink }})

{{ .Description }}
{{- range .Sections.ByWeight }}{{ if .RegularPagesRecursive }}

#### [{{ .LinkTitle }}]({{ .Permalink }})
{{ range .RegularPagesRecursive.ByWeight }}
- [{{ partial "content/markdown-escape.html" .LinkTitle }}]({{ .Permalink }})
{{- end }}
{{- end }}{{ end }}
{{- end }}{{ end }}
{{- end }}
{{- range slice "/docs/routes" "/docs/profiles" }}{{ with site.GetPage . }}

## [{{ .LinkTitle }}]({{ .Permalink }})
{{ range .RegularPages.ByWeight }}
- [{{ partial "content/markdown-escape.html" .LinkTitle }}]({{ .Permalink }}) — {{ .Description }}
{{- end }}
{{- end }}{{ end }}

## 查询与说明
{{ range slice "/docs/glossary" "/docs/about" }}{{ with site.GetPage . }}
- [{{ partial "content/markdown-escape.html" .LinkTitle }}]({{ .Permalink }}) — {{ .Description }}
{{- end }}{{ end }}
