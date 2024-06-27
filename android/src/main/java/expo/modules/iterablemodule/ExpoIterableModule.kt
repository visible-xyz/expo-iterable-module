package expo.modules.iterablemodule

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

import com.iterable.iterableapi.IterableApi;

class ExpoIterableModule : Module() {


    override fun onCreate() {
        super.onCreate()
        // Initialize IterableApi
        IterableApi.setContext(this)
    }

  override fun definition() = ModuleDefinition {
    Name("ExpoIterableModule")

    Constants(
      "PI" to Math.PI
    )

    Events("onChange")

    Function("hello") {
      "Hello world! ANDRO 👋"
    }

  }
}
