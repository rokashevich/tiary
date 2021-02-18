package com.wa16ka.tiary;

import android.os.Bundle;
import android.util.Log;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        try { // прячем заголовок https://stackoverflow.com/a/46709914
            this.getSupportActionBar().hide();
        } catch (NullPointerException e) {
        }
        Log.d("MainActivity", "Hello World");
    }
}