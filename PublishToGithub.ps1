function Publish {
    Param
    (
        [Parameter(Mandatory=$true, Position=0)]
        [string] $version
    )

    nuget push ".\PeyrSharp.Core\bin\Release\PeyrSharp.Core.$version.nupkg" -Source "github"
    nuget push ".\PeyrSharp.Exceptions\bin\Release\PeyrSharp.Exceptions.$version.nupkg" -Source "github"
    nuget push ".\PeyrSharp.Enums\bin\Release\PeyrSharp.Enums.$version.nupkg" -Source "github"
    nuget push ".\PeyrSharp.UiHelpers\bin\Release\PeyrSharp.UiHelpers.$version.nupkg" -Source "github"
    nuget push ".\PeyrSharp.Env\bin\Release\PeyrSharp.Env.$version.nupkg" -Source "github"
    nuget push ".\PeyrSharp.Extensions\bin\Release\PeyrSharp.Extensions.$version.nupkg" -Source "github"
    nuget push ".\PeyrSharp\bin\Release\PeyrSharp.$version.nupkg" -Source "github"
}

Publish